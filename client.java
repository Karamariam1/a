package cs;

import java.io.*;
import java.net.*;
import java.util.*;


public class client {
	public static void main(String[] args) {
		try (Socket SC = new Socket("localhost",1000);	
			DataInputStream is = new DataInputStream(SC.getInputStream());
			DataOutputStream os = new DataOutputStream(SC.getOutputStream());
			Scanner scan = new Scanner(System.in);){

		
			    System.out.print("Votre nom -> ");
				String nom= scan.nextLine();
				os.writeUTF(nom);
				
				while(true) {
					System.out.println("Votre msg -> ");
					String msg= scan.nextLine();
					os.writeUTF(msg);
                }
				
			
			
		}
		catch(IOException e ) {
			
		}
	}
	
}
