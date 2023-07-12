import {AiFillClockCircle} from 'react-icons/ai'

const Reliving = () => {
  return (
    <div className="pending-leaves leave-page w-full font-medium font-[Inter]">
      <p className='leave-page-heading'>You can track your process here</p>
      <div className="leave-reasons flex center flex-col gap-[10px] px-1 pb-2">

        <div className="reason flex items-center gap-[10px] p-[10px] text-base border-2 w-full rounded-lg bg-white relative">
          <div className="reason-number px-1 py-[6px] bg-[#a7f0a7e6] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">May</span>
            <span className="text-[20px]">08</span>
            <span className="text-[14px] font-normal font-[Inter]">2022</span>
          </div>

          <div className="reason-content font-normal font-[Inter] flex flex-col items-start justify-start">
            <span className="text-[#7E55F1] leading-normal text-[12px]">IBG-105-32</span>
            <div>
              <h1 className="font-bold">Letter of Resignation</h1>
              <span className="text-[14px] leading-none">Registration letter is approved & has been sent</span>
            </div>
          </div>

          <div className='flex items-center gap-[2px] absolute top-0 right-1'>
            <AiFillClockCircle style={{color: '#02C94F'}} className=' inline' /> <span className='text-[#02C94F] text-[12px]'>COMPLETED</span>
          </div>
        </div>

        <div className="reason flex items-center gap-[10px] p-[8px] text-base border-2 w-full rounded-lg bg-white relative">
          <div className="reason-number px-1 py-[6px] bg-[#FFCD1C33] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold w-[60px] text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">May</span>
            <span className="text-[20px]">08</span>
            <span className="text-[14px] font-normal">2022</span>
          </div>

          <div className="reason-content font-normal font-[Inter] flex flex-col items-start justify-start">
            <span className="text-[#7E55F1] leading-normal text-[12px]">IBG-105-32</span>
            <div>
              <h1 className="font-bold">Acceptance Letter</h1>
              <span className="text-[14px] leading-none">Letter of acceptance is in progress to you</span>
            </div>
          </div>

          <div className='flex items-center gap-[2px] absolute top-0 right-1'>
            <AiFillClockCircle style={{color: '#FFCD1C'}} className=' inline' /> <span className='text-[#FFCD1C] text-[12px]'>IN PROGRESS</span>
          </div>
        </div>
        
        <div className="reason flex items-center gap-[10px] p-[10px] text-base border-2 w-full rounded-lg bg-white relative">
          <div className="reason-number px-1 py-[6px] bg-[#f33b1233] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold w-[60px] text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">May</span>
            <span className="text-[20px]">08</span>
            <span className="text-[14px] font-normal font-[Inter]">2022</span>
          </div>

          <div className="reason-content font-normal font-[Inter] flex flex-col items-start justify-start">
            <span className="text-[#7E55F1] leading-normal text-[12px]">IBG-105-32</span>
            <div>
              <h1 className="font-bold">Relieving Letter</h1>
              <span className="text-[14px] leading-none">Relieving letter not processed still</span>
            </div>
          </div>

          <div className='flex items-center gap-[2px] absolute top-0 right-1'>
            <AiFillClockCircle style={{color: '#F33B12'}} className=' inline' /> <span className='text-[#F33B12] text-[12px]'>PENDING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reliving;
