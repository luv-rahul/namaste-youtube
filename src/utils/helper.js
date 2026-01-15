export const liveChatMessages = [
  { name: "Rahul", message: "Hello everyone 👋" },
  { name: "Ananya", message: "This stream is awesome 🔥" },
  { name: "Vikram", message: "Watching from Delhi 🇮🇳" },
  { name: "Priya", message: "Can you explain this part again?" },
  { name: "Aman", message: "First time here, hi all 😊" },
  { name: "Neha", message: "Audio is clear now 👍" },
  { name: "Suresh", message: "Loved the last example 💯" },
  { name: "Kiran", message: "Please share the repo link 🙏" },
  { name: "Pooja", message: "This helped a lot, thanks!" },
  { name: "Rohit", message: "Lag ho raha hai thoda 😅" },
  { name: "Sneha", message: "Perfect explanation 👌" },
  { name: "Arjun", message: "Is this beginner friendly?" },
  { name: "Mehul", message: "Subscribed just now 🔔" },
  { name: "Isha", message: "From Mumbai ❤️" },
  { name: "Dev", message: "Can you slow down a bit?" },
  { name: "Simran", message: "Best live session till now 🔥" },
  { name: "Nikhil", message: "React rocks 🚀" },
  { name: "Tanya", message: "Hello chat 💕" },
];

export const randomMessageGenerator = () => {
  const random = Math.floor(Math.random() * liveChatMessages.length);
  const msg = liveChatMessages[random];

  return {
    ...msg,
    id: Date.now() + Math.random(), // ✅ ALWAYS UNIQUE
  };
};
