import React from 'react'

const Page_1 = () => {
  return (
    <>
    <section>
      <div className='background_1'> </div>
      <div className='text_box_1'>
      <h1>Let'sHelp Those Who Are More In Need </h1>
        <p> Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
        <button className='donate_now_btn'>Donate Now</button>
      </div>
      





    </section >
    <section >
    <div className='textbox_2'>
        <h1>Donate Today</h1>
        <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>

        


        <div className='rectangle_container'>
            <div className='rec_text'>
                <p>1000tk</p>
            </div>
            <div className='rec_text'>
                <p>2000tk</p>
            </div>
            <div className='rec_text'>
                <p>3000tk</p>
            </div>
            <div className='rec_text'>
                <p>500tk</p>
            </div>
            <div className='rec_text'>
                <p>1000tk</p>
            </div>
        

        </div>

        <form>

<input className='text' type={"text"} placeholder="Other Amount (Taka)"></input>
    </form>
    <button className='donate_now_btn'>Donate Now</button>
    </div>

    
    
    </section>





    <section className='Donate_plan_container'>
        <h1 className='Donate_plan_header'>Our Donate Plan</h1>
        <p className='Donate_plan_para'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>

        <div className='Donate_Rectangle_Container'>
            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/food.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Food for a family</h1>
                </div>
                <p className='text3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                

                

            </div>


            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/shelter.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Shelter for a family</h1>
                </div>
                <p className='text3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                

                

            </div>

            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/Frame-1.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Education for a child</h1>
                </div>
                <p className='text3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                

                

            </div>


        </div>
    </section>


    <section className='section3'>
    <dev className="left">
        <h1 className='lives_heading'>Their lives depend on your donation</h1>
        <p >Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim
Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
        <button className='text_btn2'>How to Contribute?</button>

    </dev>
    <dev className="right">
        <div >
        <img className='image_last' src='/images/donation12.png' ></img>
        </div>

    </dev>

    </section>


    <section className='section3 reverse'>
    <dev className="left">
        <h1 className='lives_heading'>They need us
to suvive</h1>
        <p >Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim
Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>

        <button className='text_btn2'>How to Contribute?</button>

    </dev>
    <dev className="right">
        <div >
        <img className='image_last' src='/images/donation12.png' ></img>
        </div>

    </dev>

    </section>

    <section className='last_container'>
    <h1 className='last_heading'>Get My Updates</h1>
    <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>

    <div className='set_box'>
        <form className='form_set'>
        <input className='email_field' type={"email"} placeholder="Email"></input>
        <button className='last_btn' type={"submit"}>Subscribe</button>
        </form>
    </div>

    <footer className='footer_container'>
    <h2 className='footer_header'>Be Humble</h2>
        <p>I’m gonna do it</p>

    </footer >
        

    </section>


   

    

    </>
  )
}

export default Page_1
