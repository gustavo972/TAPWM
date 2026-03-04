import entity.CheckingAccount;
import entity.Employee;

import java.time.Instant;

public class Main {
    public static void main(String[] args) {
        Employee employee = new Employee(1L, "John Doe", Instant.parse("2020-01-01T00:00:00Z"));
        CheckingAccount checkingAccount = new CheckingAccount(1L, "John Doe", 1000.0);

        System.out.println("Employee 01 - : " + employee);
        System.out.println("Checking Account 01 - : " + checkingAccount);

        System.out.println(employee.TempoTrabalho());

    }
}
