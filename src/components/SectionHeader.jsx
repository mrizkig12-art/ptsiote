export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <div className="h-1 w-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
