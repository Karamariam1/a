package Consprod;

import java.util.*;
public class BUFFER {

	private final  int maxsize;
	private final  List <String> messages= new ArrayList<>();
	public BUFFER(int maxsize) {
		this.maxsize = maxsize;
	}


	public synchronized void produce(String msg) throws InterruptedException {
		while(messages.size()==maxsize) {
			wait();
		}
		messages.add(msg);
		
		notifyAll();
	}
	
	public synchronized String consume() throws InterruptedException {
		while(messages.isEmpty()) {
			wait();
		}
		String msg=messages.removeFirst();
		
		notifyAll();
		return msg;
	}
	
}
