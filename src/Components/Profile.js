import React from 'react'

function Profile() {
    return (
        <>
            <h1 className='flex justify-center py-4 text-3xl text-yellow-600'>Intern's Details</h1>
            <div className='flex justify-center mt-6 py-12 mx-auto h-80 w-96 border-solid border-2 rounded-3xl shadow-xl border-slate-700 text-gray-300 text-xl leading-10'>
                <div>
                    <p>Name: Maheshwari Bande</p>
                    <p>Email: <a href="https://mail.google.com/mail/u/0/fs=1&to=mamtabnd097@gmail.com&su=SUBJECT+HERE&body=BODY+HERE&tf=cm" target="_blank">mamtabnd097@gmail.com</a></p>
                    <p>Contact Number: 9156814264</p>
                    <div className='flex justify-start gap-6 underline mt-9'>
                        <div className='flex justify-start'>
                            <img src="https://img.icons8.com/bubbles/50/null/github.png" />
                            <a href="https://github.com/maheshwaribnd" target="_blank">GitHub</a>
                        </div>
                        <div className='flex justify-start'>
                            <img src="https://img.icons8.com/bubbles/50/null/linkedin.png" />
                            <a href="https://www.linkedin.com/in/maheshwari-b-170684188/" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
