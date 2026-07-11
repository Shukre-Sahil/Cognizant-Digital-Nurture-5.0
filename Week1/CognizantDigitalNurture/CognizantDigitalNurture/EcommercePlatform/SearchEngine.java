import java.util.Arrays;

public class SearchEngine {

    // 1. Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product; // Found
            }
        }
        return null; // Not found
    }

    // 2. Binary Search
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (sortedProducts[mid].productId == targetId) {
                return sortedProducts[mid]; // Found
            }
            if (sortedProducts[mid].productId < targetId) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        return null; // Not found
    }

    public static void main(String[] args) {
        // Setup unsorted array for Linear Search
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Phone", "Electronics"),
            new Product(103, "Shoes", "Apparel")
        };

        // Setup sorted array for Binary Search
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts); 

        int searchId = 103;

        // Test Linear Search
        System.out.println("Linear Search Result: " + linearSearch(products, searchId));

        // Test Binary Search
        System.out.println("Binary Search Result: " + binarySearch(sortedProducts, searchId));
    }
}