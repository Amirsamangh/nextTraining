import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
            <h2 className=' mb-4 text-center text_3xl'>
                <span>404</span>
                <br />
                <span>صفحه مورد نظر یافت نشد</span>
            </h2>
            <p className='text_md'>لطفا آدرس را به درستی وارد کنید</p>
            <button className='btn custom-btn'>
                <Link href="/">
                    <span className='text-white text_md'>بازگشت به صفحه اصلی</span>
                </Link>
            </button>
        </div>
    )
}