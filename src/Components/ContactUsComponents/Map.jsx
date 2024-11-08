
const Map = () => {
    return (
        <section>
            <div className="container mx-auto relative h-0 overflow-hidden mb-6 pb-[600px]">
                <iframe
                    className="absolute top-0 left-0 w-full h-[500px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.434334305313!2d90.40780580000001!3d23.792496100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1610035984427!5m2!1sen!2sbd"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </section>
    );
};

export default Map;