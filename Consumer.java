package Consprod;

public class Consumer extends Thread {
	private final BUFFER buffer;
	private int index;

	
	public Consumer(BUFFER buffer, int index) {
		this.buffer = buffer;
		this.index=index;
		
	}



	public void run() {
		
			try {
				String msg=buffer.consume();
				System.out.println("cons "+index+" ->"+msg);
			} catch (Exception e) {
			
		}
	}


}
