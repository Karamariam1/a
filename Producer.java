package Consprod;

public class Producer extends Thread {
	private final BUFFER buffer;
	private final String msg;
	private final int index;
	
	public Producer(BUFFER buffer, String msg,int index) {
		this.buffer = buffer;
		this.msg=msg;
		this.index=index;
		}



	public void run() {
		
			try {
				buffer.produce(msg);
				System.out.println("Prod "+index+" ->"+msg);
			} catch (Exception e) {
			
		}
	}


}
