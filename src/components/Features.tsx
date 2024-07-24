import { Feature } from "./Feature";

const features = [
  {
    title: "Personalize Tasks",
    description:
      "These chatbots learn from your preferences and habits, allowing for a more personalized experience tailored to your unique needs.",
  },
  {
    title: "Contextual Suggestions",
    description:
      "Based on your interactions, these chatbots offer relevant suggestions like document templates, resource references, and efficiency tips.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl py-4 sm:text-6xl tracking-tighter cursor-default">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Equipped with a proactive virtual assistant feature to keep you
            ahead in your work, this feature not only responds to your commands
            and questions but also actively offers help based on your context
            and needs.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
           <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
