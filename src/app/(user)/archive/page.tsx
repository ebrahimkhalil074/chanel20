/* eslint-disable prettier/prettier */
'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import Section4 from '@/src/components/news/Section4';
import 'react-datepicker/dist/react-datepicker.css';
import Slider2 from '@/src/components/Slider2';

const Archive = () => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState(2025);
  const [category, setCategory] = useState('অনলাইন সংস্করণ');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [results, setResults] = useState(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
  const categories = ['অনলাইন সংস্করণ', 'প্রিন্ট সংস্করণ'];

  const handleSearch = () => {
    const monthIndex = months.indexOf(month);
    const date = new Date(year, monthIndex, day);

    setSelectedDate(date); // sync with calendar

    const formatted = `${day} ${month} ${year} - ${category}`;

    setResults({
      message: `ফলাফল দেখানো হচ্ছে: ${formatted}`,
      items: [
        { id: 1, title: 'ডামি আর্টিকেল ১' },
        { id: 2, title: 'ডামি আর্টিকেল ২' },
        { id: 3, title: 'ডামি আর্টিকেল ৩' },
        { id: 4, title: 'ডামি আর্টিকেল ৪' },
      ]
    });
  };

  const handleCalendarChange = (date) => {
    const selectedDay = date.getDate();
    const selectedMonth = months[date.getMonth()];
    const selectedYear = date.getFullYear();

    setDay(selectedDay);
    setMonth(selectedMonth);
    setYear(selectedYear);
    setSelectedDate(date);

    const formatted = `${selectedDay} ${selectedMonth} ${selectedYear} - ${category}`;

    setResults({
      message: `ফলাফল দেখানো হচ্ছে: ${formatted}`,
      items: [
        { id: 1, title: 'ডামি আর্টিকেল ১' },
        { id: 2, title: 'ডামি আর্টিকেল ২' },
        { id: 3, title: 'ডামি আর্টিকেল ৩' },
        { id: 4, title: 'ডামি আর্টিকেল ৪' },
      ]
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-6 max-w-7xl mx-auto font-sans">
      {/* Left Side: Dropdown Filter */}
      <div className="col-span-12 lg:col-span-8 border rounded p-6 shadow">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={day}
            onChange={e => setDay(Number(e.target.value))}
          >
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={month}
            onChange={e => setMonth(e.target.value)}
          >
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={year}
            onChange={e => setYear(Number(e.target.value))}
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <button
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm transition"
            onClick={handleSearch}
          >
            খুঁজুন
          </button>
        </div>

        {/* Results Section */}
        {results ? (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{results?.message}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {results.items.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-6 text-gray-500 text-md">কোনো তথ্য পাওয়া যায়নি</div>
        )}
      </div>

      {/* Right Side: Calendar */}
      <div className=" col-span-12 lg:col-span-4 flex justify-center items-center border rounded  shadow">
       <div>
      <div>
      <DatePicker
          inline
          selected={selectedDate}
          onChange={handleCalendarChange}
        />
      </div>
     
     <div className='w-full'>
      <Slider2 />
     </div>
       </div>
      </div>
     <div className='col-span-12'>
     <Section4 />
     </div>
    </div>
  );
};

export default Archive;
