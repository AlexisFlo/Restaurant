import { motion } from "framer-motion";

export const DishesCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-white">
          {project.title}
        </h3>
        <p className="text-sm text-white">{project.description}</p>
      </div>
    </motion.div>
  );
};
