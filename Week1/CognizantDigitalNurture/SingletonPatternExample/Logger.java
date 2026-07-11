public class Logger {
    // Private static instance of the class
    private static Logger instance;

    // Private constructor to prevent instantiation from other classes
    private Logger() {
        System.out.println("Logger Instance Created.");
    }

    // Public static method to provide the global point of access
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // A simple method to simulate logging
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}