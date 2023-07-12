const HolidaySheet = () => {
  return (
    <div className="pending-leaves leave-page w-full font-medium font-[Inter]">
      <p className="leave-page-heading">You can track your process here</p>

      <div className="leave-reasons flex items-center justify-center flex-row gap-[5px] px-1 pb-2 flex-wrap">
        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#a7f0a7e6] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">JAN</span>
            <span className="text-[20px]">26</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px] mt-[2px]">Republic Day</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#0269C933] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">FEB</span>
            <span className="text-[20px]">18</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px] mt-[2px]">Mahashivratri</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#A1C90233] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">Mar</span>
            <span className="text-[20px]">08</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px] mt-[2px]">Holi</p>
        </div>
        <div className="w-[91px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#C9020233] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">APR</span>
            <span className="text-[20px]">04</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px]">Mahavir Jayanti</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#C9020233] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">APR</span>
            <span className="text-[20px]">07</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px]">Good Friday</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#C9020233] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">APR</span>
            <span className="text-[20px]">22</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px]">Idul-Fitr</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#AD02C933] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">MAY</span>
            <span className="text-[20px]">05</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px]">Buddha Purnima</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#1C00CB33] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">JUN</span>
            <span className="text-[20px]">29</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px]">Bakrid / Eid al Adha</p>
        </div>

        <div className="w-[90px] text-center">
          <div className="reason-number px-1 py-[6px] bg-[#A5A5B433] text-black flex flex-col items-center justify-center rounded-lg text-lg font-bold text-center leading-snug min-w-[60px]">
            <span className="text-[14px] font-normal font-[Inter]">JUL</span>
            <span className="text-[20px]">29</span>
            <span className="text-[14px] font-normal font-[Inter]">2023</span>
          </div>
          <p className="text-[12px] mb-[13px]">Muharram</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default HolidaySheet;
