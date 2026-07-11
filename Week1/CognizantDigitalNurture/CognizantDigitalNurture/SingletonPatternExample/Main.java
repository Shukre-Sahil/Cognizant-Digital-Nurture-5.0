public class Main {
    public static void main(String[] args) {
        // Try to get two instances of Logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Log messages using both references
        logger1.log("This is the first message.");
        logger2.log("This is the second message.");

        // Verify that both variables point to the exact same instance
        if (logger1 == logger2) {
            System.out.println("\nSUCCESS: Both logger1 and logger2 point to the same instance.");
        } else {
            System.out.println("\nFAILURE: Different instances exist.");
        }
    }
}
