export default function Card({ icon: Icon, title, description, button, onClick }) {
  return (
    <div className="scroll-fade-in group bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary-600 overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Button */}
        {button && (
          <button
            onClick={onClick}
            className="btn-glow inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300"
          >
            {button}
          </button>
        )}
      </div>

      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 group-hover:opacity-100 opacity-0 transition-opacity" />
    </div>
  )
}
