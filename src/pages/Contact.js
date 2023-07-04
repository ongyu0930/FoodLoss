import React from 'react'

const Contact = () => {
  return (
    <>
      <div class="container mx-auto my-20 w-1/3 border border-orange-500 bg-white">
        <div class="p-5 space-y-5 shadow-xl">
          <h4 class="text-center text-2xl">お問い合わせ</h4>

          <form>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                class="border border-orange-500 px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="First Name"
              />
              <input
                type="text"
                class="border border-orange-500 px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Last Name"
              />
              <input
                type="email"
                class="border border-orange-500 px-4 py-2 focus:outline-none focus:border-orange-500 sm:col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                class="border border-orange-500 px-4 py-2 focus:outline-none focus:border-orange-500 sm:col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols="10"
                rows="5"
                class="border border-orange-500 px-4 py-2 focus:outline-none focus:border-orange-500 sm:col-span-2"
                placeholder="メッセージをお書きください..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-orange-500 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact