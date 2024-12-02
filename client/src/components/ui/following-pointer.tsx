import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useSocket } from "@/context/SocketContext";
 // Import the custom hook

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const { socket } = useSocket(); // Get socket from context
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [cursorPositions, setCursorPositions] = useState<any[]>([]); // To track other users' cursors

  useEffect(() => {
    if (socket) {
      // Handle incoming mouse move events from other users
      socket.on("MOUSE_MOVE", (data) => {
        setCursorPositions((prev) => {
          return [
            ...prev.filter((cursor) => cursor.username !== data.username),
            data,
          ];
        });
      });

      return () => {
        socket.off("MOUSE_MOVE"); // Cleanup the event listener
      };
    }
  }, [socket]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    x.set(e.clientX + scrollX);
    y.set(e.clientY + scrollY);

    // Emit the mouse movement to the server if socket is available
    if (socket) {
      socket.emit("MOUSE_MOVE", {
        x: e.clientX + scrollX,
        y: e.clientY + scrollY,
        username: title || "Anonymous", // Send the username with each mouse movement
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      className={`${className} relative`} // Ensure the container is relative
    >
      <AnimatePresence>
        <motion.div
          style={{
            top: y.get(),
            left: x.get(),
            pointerEvents: "none",
          }}
          className="absolute z-50 w-6 h-6 bg-blue-500 rounded-full"
        />
      </AnimatePresence>

      {/* Display other users' cursors */}
      {cursorPositions.map((cursor, index) => (
        <motion.div
          key={index}
          style={{
            top: cursor.y,
            left: cursor.x,
            position: "absolute",
            pointerEvents: "none",
          }}
          className="w-6 h-6 bg-red-500 rounded-full"
        >
          <motion.div
            className="absolute text-xs text-white bg-black p-1 rounded-full"
            style={{
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {cursor.username}
          </motion.div>
        </motion.div>
      ))}

      {/* Make sure children content is wrapped properly */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
