import xmark from '../assets/images/xmark.svg'

const SupporterModal = () => {
    return ( 
        <div className='flex w-[660px] h-[924px] mt-[16.6%] mx-auto bg-white rounded-lg'>
            <div className="flex justify-between justify-items-center py-[20px] w-full h-fit px-6 border-solid border-b-[1px] border-[#EAEAEB] ">
                <p className='mr-4 text-lightGray font-medium text-[14px] leading-[24px]'>აქტიური მხარდამჭერები</p>
                <p className='mr-[140px] text-lightGray font-medium text-[14px] leading-[24px]'>ყოფილი მხარდამჭერები</p>
                <img className='w-5 h-5' src={xmark} alt="xmark"/>
            </div>
             <div>

            </div>
        </div>

     );
}
 
export default SupporterModal;