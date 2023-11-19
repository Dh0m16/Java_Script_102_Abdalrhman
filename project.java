import java.util.ArrayList;
import java.util.List;

class Vehicle {

    String name;
    String manufacturer;
    String id;

    public Vehicle(String name, String manufacturer, String id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {

    String type;

    public Car(String name, String manufacturer, String id, String type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Airplane extends Vehicle {

    String type;

    public Airplane(String name, String manufacturer, String id, String type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Employee {

    String name;
    String id;
    String dateOfBirth;

    public Employee(String name, String id, String dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
}

class Driver extends Employee {

    String licenseID;

    public Driver(String name, String id, String dateOfBirth, String licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {

    String licenseID;

    public Pilot(String name, String id, String dateOfBirth, String licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Reservation {

    String reservationDate;
    String employeeId;
    String vehicleId;
    String reservationID;

    public Reservation(String reservationDate, String employeeId, String vehicleId, String reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationID = reservationID;
    }
}

public class TransportationSystem {

    static List<Vehicle> vehicles = new ArrayList<>();
    static List<Employee> employees = new ArrayList<>();
    static List<Reservation> reservations = new ArrayList<>();

    public static void main(String[] args) {

        vehicles.add(new Car("Sonata", "Hyundai", "C001", "gas"));
        vehicles.add(new Car("Civic", "Honda", "C002", "gas"));
        vehicles.add(new Car("Model S", "Tesla", "C003", "electric"));
        vehicles.add(new Car("Camry", "Toyota", "C004", "hybrid"));
        vehicles.add(new Car("Taurus", "Ford", "C005", "gas"));

        vehicles.add(new Airplane("747", "Boeing", "A001", "commercial"));
        vehicles.add(new Airplane("A380", "Airbus", "A002", "commercial"));
        vehicles.add(new Airplane("787 Dreamliner", "Boeing", "A003", "commercial"));
        vehicles.add(new Airplane("Cessna 172", "Cessna", "A004", "private"));
        vehicles.add(new Airplane("Concorde", "Aerospatiale/BAC", "A005", "supersonic"));

        employees.add(new Driver("Ahmed Mohammed", "E001", "1990-01-01", "D001"));
        employees.add(new Driver("Mohammed Ali", "E002", "1985-02-20", "D002"));
        employees.add(new Driver("Abdullah Al-Omari", "E003", "1978-11-15", "D003"));

        employees.add(new Pilot("Mohammed Abdullah", "E004", "1985-05-15", "P001"));
        employees.add(new Pilot("Ahmed Al-Jabri", "E005", "1979-03-22", "P002"));
        employees.add(new Pilot("Abdalrhman Al-QRONI", "E006", "2000-02-06", "P003"));

        assignVehicle("E006", "A001");

        assignVehicle("E001", "C001");

        assignVehicle("E002", "C005");

        reservations.forEach(reservation -> {
            System.out.println("Reservation ID: " + reservation.reservationID + ", Vehicle ID: " + reservation.vehicleId + ", Employee ID: " + reservation.employeeId);
        });
    }

    public static void assignVehicle(String employeeId, String vehicleId) {
        Employee employee = employees.stream().filter(e -> e.id.equals(employeeId)).findFirst().orElse(null);
        Vehicle vehicle = vehicles.stream().filter(v -> v.id.equals(vehicleId)).findFirst().orElse(null);

        if (employee == null || vehicle == null) {
            System.out.println("لم يتم العثور على الموظف أو المركبة.");
            return;
        }

        if (employee instanceof Pilot && vehicle instanceof Car) {
            System.out.println("لا يمكن تعيين طيار لسيارة.");
            return;
        }

        if (employee instanceof Driver && vehicle instanceof Airplane) {
            System.out.println("لا يمكن تعيين سائق لطائرة.");
            return;
        }

        String reservationID = "R" + (reservations.size() + 1);
        Reservation newReservation = new Reservation("2023-11-19", employee.id, vehicle.id, reservationID);
        reservations.add(newReservation);
        System.out.println("تم إنشاء الحجز بنجاح لـ " + employee.name);
    }
}
