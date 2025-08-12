// Firebase simulation for real-time updates
// In a real implementation, this would connect to Firebase Realtime Database

export class FirebaseService {
  private listeners: Map<string, (data: any) => void> = new Map();
  
  // Simulate real-time updates
  subscribe(path: string, callback: (data: any) => void) {
    this.listeners.set(path, callback);
    
    // Simulate periodic updates
    const interval = setInterval(() => {
      if (path === "leaderboard") {
        // Simulate leaderboard updates
        callback({ updated: Date.now() });
      } else if (path === "impact-stats") {
        // Simulate impact stats updates
        callback({ updated: Date.now() });
      }
    }, 10000);
    
    return () => {
      clearInterval(interval);
      this.listeners.delete(path);
    };
  }
  
  unsubscribe(path: string) {
    this.listeners.delete(path);
  }
}

export const firebaseService = new FirebaseService();
