package Java;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

/**
 * Main
 */
public class Main {

    public static void main(String[] args) {
        System.out.println("hello world");
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        Integer age = 24;
        String name = "dante";
        boolean isMale = true;
        char middleInitial = 'b';
        double bank = 17.5;
        int[] ages = { 1, 2, 3, 4, 5, 6, 7 };
        String[] names = new String[15];

        // System.out.println("what's your name: ");
        // if(name.equalsIgnoreCase( scanner.nextLine())) {
        // System.out.println("your name is goated");
        // }
        // else {
        // System.out.println("ur name is dumb");
        // }
        // System.out.println("what's your age: ");

        // int temp = Math.max(scanner.nextInt(), age);
        System.out.println(random.nextDouble());

        switch (age) {
            case 1:
                System.out.println("yo");
                break;
            case 24:
                System.out.println("kobeee");
                break;
            default:
                System.out.println("who you");
                break;

        }
        arrayPractice();
    }


    public static void arrayPractice() {

        ArrayList<Integer> ageList = new ArrayList<Integer>();

        ageList.add(5);
        ageList.add(6);
        ageList.add(32);
        ageList.add(98);

        ageList.addAll(ageList);
        System.out.println(ageList);

    }

    public static void classPractice() {
        Dog dog1 = new Dog("max", 4);
        System.out.println("this is my dog, " + dog1.getName());
        System.out.printf("he has %d legs ", dog1.legs);

    }

    public static <T> void genericPractice(T arrays) {

    }
}

//Generics
/*
 
*/