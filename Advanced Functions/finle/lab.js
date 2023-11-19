import java.util.ArrayList;

// كلاس الأساسي للمركبات
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

// كلاس السيارة
class Car extends Vehicle {
    String type; // gas or electric

    public Car(String name, String manufacturer, String id, String type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// كلاس الطائرة
class Airplane extends Vehicle {
    String type; // نوع الطائرة

    public Airplane(String name, String manufacturer, String id, String type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// كلاس الموظفين
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

// كلاس السائق
class Driver extends Employee {
    String licenseID;

    public Driver(String name, String id, String dateOfBirth, String licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

// كلاس الطيار
class Pilot extends Employee {
    String licenseID;

    public Pilot(String name, String id, String dateOfBirth, String licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

// كلاس الحجوزات
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

    public static void main(String[] args) {
        // تعريف السيارات والطائرات
        Car car1 = new Car("Car 1", "Toyota", "C001", "gas");
        Car car2 = new Car("Car 2", "Honda", "C002", "electric");
        Car car3 = new Car("Car 3", "Ford", "C003", "gas");
        Airplane airplane1 = new Airplane("Airplane 1", "Boeing", "A001", "commercial");
        Airplane airplane2 = new Airplane("Airplane 2", "Airbus", "A002", "private");

        // تعريف السائقين والطيارين
        Driver driver1 = new Driver("Driver 1", "D001", "1980-01-01", "L001");
        Pilot pilot1 = new Pilot("Pilot 1", "P001", "1975-01-01", "L002");

        // تعريف مصفوفة الحجوزات
        ArrayList < Reservation > reservations = new ArrayList <> ();

        // إنشاء حجوزات
        makeReservation(driver1, car1, reservations); // يجب أن يكون الحجز ناجحًا
        makeReservation(pilot1, airplane1, reservations); // يجب أن يكون الحجز ناجحًا
        makeReservation(pilot1, car2, reservations); // يجب أن تظهر رسالة خطأ

        // طباعة محتوى مصفوفة الحجوزات
        printReservations(reservations);
    }

