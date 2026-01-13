import {useState , useEffect} from "react";
import { socket } from "@/lib/socket";

export type Message = {
    type: "user" | "system";
    sender?: "string";
    text: "string";
    time: "string";
};
export function useChat(sessionId: string , user:string)
{
    const[messages, setMessages] = useState<Message[]>([]);
    useEffect(() =>
    {
        socket.connect();
        socket.emit("join-session" , {sessionId , user});
        socket.on("chat-message" , (msg: Message) =>
        {
            setMessages((prev) => [...prev,msg]);
        });
        socket.on("system-message" , (msg:Message) =>
        {
            setMessages((prev) => [...prev,msg]);
        });
        return () =>
        {
            socket.emit("leave-session" , {sessionId , user});
            socket.disconnect();
        };
    }, [sessionId , user]);
    const sendMessage = (text:string) =>{
        socket.emit("chat-message" , {
            sessionId,
            message:{
                type:"user",
                sender:user,
                text,
                time: new Date().toISOString(),
            },
        });
    };
    return{messages , sendMessage};
}