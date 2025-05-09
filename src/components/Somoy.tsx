/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { bn } from 'date-fns/locale';
import { FaLocationArrow } from 'react-icons/fa';

// Convert English digits to Bangla
const toBanglaDigits = (str) => str.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);

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
    <div className="text-center p-4 bg-gray-100 rounded shadow text-lg font-semibold space-y-1">
      <div> ঢাকা</div>
      <div>🕒: {toBanglaDigits(formattedDate)}</div>
      <div>🕒: {toBanglaDigits(formattedTime)}</div>
    </div>
  );
};

export default Somoy;
