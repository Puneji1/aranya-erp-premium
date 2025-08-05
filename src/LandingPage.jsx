export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-700">
          Aranya Foods – India's Smartest ERP
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-medium">
          🌿 AI-पावर्ड ERP सिस्टीम – जे ROI वाढवतं, फ्रँचायझी वाढवतं आणि पूर्ण ऑटोमेशनसाठी तयार आहे.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          आमचं विशेष उत्पादन: मसाले, प्रीमिक्स आणि पारंपरिक चव असलेली रेडी-टू-कुक सीरिज – आता ERP सिस्टीमसह मोफत मार्गदर्शन मिळवा.
        </p>
        <a
          href="https://wa.me/918830445044"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-xl shadow-xl transition-all"
        >
          📲 WhatsApp वर मोफत सल्ला घ्या
        </a>
      </section>
      

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const fullName = formData.get('fullName');
  const phoneNumber = formData.get('phoneNumber');

  const { error } = await supabase
    .from('lead_submissions')
    .insert([{ full_name: fullName, phone_number: phoneNumber }]);

  if (error) {
    setStatus('त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
  } else {
    setStatus('✅ धन्यवाद! तुमची नोंदणी झाली आहे.');
    e.target.reset();
  }
};

      <footer className="mt-16 text-sm text-gray-500">
        © 2025 Aranya Foods. Powered by Vercel. Crafted with ❤️ for Smart MSMEs.
      </footer>
    </main>
  );
}
