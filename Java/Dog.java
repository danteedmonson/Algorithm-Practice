package Java;

public class Dog extends Animal {
    String breed;
    int age;
    int weight;
    private String name;

    Dog(String name, int legs) {
        super(legs);
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    
}
