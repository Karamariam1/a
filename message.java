package Consprod;

public class message {

	private String msg;

	public message(String msg) {
		super();
		this.msg = msg;
	}

	public synchronized String getMsg() {
		return msg;
	}

	public synchronized void setMsg(String msg) {
		this.msg = msg;
	}
	
	
}
