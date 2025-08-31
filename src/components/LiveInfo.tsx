import { useState, useEffect, useCallback } from "react";

export function LiveInfo() {
  const [time, setTime] = useState(new Date());
  const [temperature] = useState(22); // Mock temperature for Madrid

  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Madrid",
    });
  };

  return (
    <div className="text-xs tracking-widest text-gray-600 uppercase font-medium">
      <div className="mb-1">{formatTime(time)} Madrid</div>
      <div>{temperature}°C</div>
    </div>
  );
}