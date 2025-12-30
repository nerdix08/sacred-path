import { useState, useEffect, useCallback } from "react";
import { sampleVerses } from "@/data/sampleVerses";

const NOTIFICATION_PERMISSION_KEY = "vidya_notification_permission";
const LAST_NOTIFICATION_KEY = "vidya_last_notification";

export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported("Notification" in window);
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (!isSupported) return false;
    
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      localStorage.setItem(NOTIFICATION_PERMISSION_KEY, result);
      return result === "granted";
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return false;
    }
  }, [isSupported]);

  const sendNotification = useCallback((title: string, options?: NotificationOptions) => {
    if (!isSupported || permission !== "granted") return null;
    
    try {
      const notification = new Notification(title, {
        icon: "/favicon.svg",
        badge: "/favicon.svg",
        ...options,
      });
      return notification;
    } catch (error) {
      console.error("Error sending notification:", error);
      return null;
    }
  }, [isSupported, permission]);

  const sendDailyShloka = useCallback(() => {
    if (!isSupported || permission !== "granted") return;
    
    const lastNotification = localStorage.getItem(LAST_NOTIFICATION_KEY);
    const today = new Date().toDateString();
    
    // Only send once per day
    if (lastNotification === today) return;
    
    // Get a random verse
    const randomVerse = sampleVerses[Math.floor(Math.random() * sampleVerses.length)];
    
    sendNotification("🙏 Daily Shloka", {
      body: `${randomVerse.sanskrit}\n\n${randomVerse.translations.english.slice(0, 100)}...`,
      tag: "daily-shloka",
      requireInteraction: true,
    });
    
    localStorage.setItem(LAST_NOTIFICATION_KEY, today);
  }, [isSupported, permission, sendNotification]);

  const scheduleDailyNotification = useCallback(() => {
    if (!isSupported || permission !== "granted") return;
    
    // Check and send immediately if not sent today
    sendDailyShloka();
    
    // Schedule for 7 AM next day
    const now = new Date();
    const tomorrow7am = new Date(now);
    tomorrow7am.setDate(tomorrow7am.getDate() + 1);
    tomorrow7am.setHours(7, 0, 0, 0);
    
    const msUntilNotification = tomorrow7am.getTime() - now.getTime();
    
    setTimeout(() => {
      sendDailyShloka();
      // Re-schedule for next day
      setInterval(sendDailyShloka, 24 * 60 * 60 * 1000);
    }, msUntilNotification);
  }, [isSupported, permission, sendDailyShloka]);

  return {
    permission,
    isSupported,
    isGranted: permission === "granted",
    requestPermission,
    sendNotification,
    sendDailyShloka,
    scheduleDailyNotification,
  };
}
