
import React, { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { bn } from 'date-fns/locale';
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import { FaClock } from 'react-icons/fa';
// Convert English digits to Bangla
const toBanglaDigits = (str: string): string => {
  return str.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
};

const Somoy = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = formatInTimeZone(
    now,
    'Asia/Dhaka',
    "eeee, dd MMMM yyyy,",
    { locale: bn }
  );
  const formattedTime = formatInTimeZone(
    now,
    'Asia/Dhaka',
    "hh:mm:ss a,",
    { locale: bn }
  );

  return (
    <div className="flex flex-wrap items-center justify-center  rounded shadow md:text-lg   gap-3 text-red-700 text-md">
      <div className='flex items-center'><FaLocationDot /> ঢাকা</div>
      <div className='flex items-center'><FaCalendar/>: {toBanglaDigits(formattedDate)}</div>
      <div className='flex items-center'><FaClock />: {toBanglaDigits(formattedTime)}</div>
    </div>
  );
};

export default Somoy;
