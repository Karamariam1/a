package Consprod;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BUFFER b = new BUFFER(5);
		Producer p1 = new Producer(b, "A",1);
		Consumer c1 = new Consumer(b,1);
		Producer p2 = new Producer(b, "B",2);
		Consumer c2 = new Consumer(b,2);
		Producer p3 = new Producer(b, "C",3);
		Consumer c3 = new Consumer(b,3);
		
		p1.start();
        p2.start();
        p3.start();

        c1.start();
        c2.start();
        c3.start();
	}

}
