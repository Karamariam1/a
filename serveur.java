package cs;

import java.net.*;
import java.io.*;

public class serveur {

	public static void main(String[] args) {
		try (ServerSocket SV = new ServerSocket(1000);){
			System.out.println("Serveur démarré, en attente de connexion...");
			
			Socket clientSocket =SV.accept();
			System.out.println("Client connecté.");
			
			try (DataInputStream input = new DataInputStream(clientSocket.getInputStream());
	                 DataOutputStream output = new DataOutputStream(clientSocket.getOutputStream())) {

	                
	                String nom = input.readUTF();
	                System.out.println(nom + " a rejoint le chat !");

	                
	                output.writeUTF("Bienvenue " + nom + " ! Entrez votre message :");

	                while(true) {
	                	try{
	                		String msg = input.readUTF();
	                	System.out.println(nom + " : " + msg);
	                	}catch(EOFException e) {
	                		System.out.println(nom + " a quitté le chat.");
	                        break;
	                	}
	                }
	                
	            }}
		catch( IOException e ) {
			
		}
			}
		
	}
	
	


