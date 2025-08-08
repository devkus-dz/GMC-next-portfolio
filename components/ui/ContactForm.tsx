

export default function ContactForm() {
  return (
    <div className="my-4 ">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm lg:w-xl border p-4 md:p-8">
            {/* <legend className="fieldset-legend">Contact form</legend> */}

            <label className="label">Full Name</label>
            <input type="text" className="input w-full validator" placeholder="Full Name ..."  required/>
            <div className="validator-hint !m-0">Full name required</div>

            <label className="label">Email</label>
            <input type="email validator" className="input w-full" placeholder="Email ..."  required/>
            <div className="validator-hint !m-0">Enter valid email address</div>
            
            <label className="label">Message</label>
            <textarea className="textarea w-full validator" placeholder="Your Message ..." rows={10} required></textarea>
            <div className="validator-hint !m-0">Message is required</div>

            <button type="submit" className="btn btn-neutral mt-4 rounded-lg">Send me a message</button>
        </fieldset>
    </div>
  )
}
