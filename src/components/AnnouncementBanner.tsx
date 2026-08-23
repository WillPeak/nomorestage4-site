export default function AnnouncementBanner() {
  return (
    <section className="bg-primary-700 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="font-medium">
          <span className="inline-block bg-white text-primary-700 px-2 py-1 rounded-md text-sm font-bold mr-2">NEW</span>
          Two-week trial in New Canaan, CT starting soon. Limited slots available!
          <a href="#booking" className="underline font-semibold ml-2 hover:text-primary-100">Book now</a>
        </p>
      </div>
    </section>
  );
}
