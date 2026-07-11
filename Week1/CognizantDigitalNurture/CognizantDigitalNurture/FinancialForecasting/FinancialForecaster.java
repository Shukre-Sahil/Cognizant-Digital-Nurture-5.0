public class FinancialForecaster {

    /**
     * Calculates future value using a recursive approach.
     * Formula: Future Value = Present Value * (1 + Growth Rate)
     * * @param presentValue The current starting capital
     * @param growthRate   The annual growth rate (e.g., 0.05 for 5%)
     * @param years        The number of years to forecast
     * @return The predicted future value
     */
    public static double predictFutureValue(double presentValue, double growthRate, int years) {
        // Base Case: If years is 0, the value hasn't changed.
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case: Calculate the value for (years - 1) and apply current year growth
        double previousYearValue = predictFutureValue(presentValue, growthRate, years - 1);
        return previousYearValue * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialInvestment = 1000.0; // $1,000
        double annualRate = 0.05;          // 5% growth
        int forecastPeriod = 5;            // 5 years

        double futureValue = predictFutureValue(initialInvestment, annualRate, forecastPeriod);

        System.out.printf("Initial Investment: $%.2f%n", initialInvestment);
        System.out.printf("Forecasted Value after %d years: $%.2f%n", forecastPeriod, futureValue);
    }
}
