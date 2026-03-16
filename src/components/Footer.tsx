export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nirmal Kumar. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
