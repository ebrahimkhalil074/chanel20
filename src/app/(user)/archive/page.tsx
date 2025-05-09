/* eslint-disable prettier/prettier */
'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = () => {
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

  const handleSearch = (date = selectedDate) => {
    const selectedDay = date.getDate();
    const selectedMonth = months[date.getMonth()];
    const selectedYear = date.getFullYear();

    setDay(selectedDay);
    setMonth(selectedMonth);
    setYear(selectedYear);
    setSelectedDate(date);

    const formatted = `${selectedDay} ${selectedMonth} ${selectedYear} - ${category}`;

    setResults({
      message: `Showing results for: ${formatted}`,
      items: [
        { id: 1, title: 'ডামি আর্টিকেল ১' },
        { id: 2, title: 'ডামি আর্টিকেল ২' },
        { id: 3, title: 'ডামি আর্টিকেল ৩' },
        { id: 4, title: 'ডামি আর্টিকেল ৪' },
      ]
    });
  };

  const handleCalendarChange = (date) => {
    handleSearch(date);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
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
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>

        <div className="border rounded shadow-sm p-2 inline-block">
          <DatePicker
            inline
            selected={selectedDate}
            onChange={handleCalendarChange}
          />
        </div>

        {results ? (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{results.message}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {results.items.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-6 text-gray-500 text-md">No Data</div>
        )}
      </div>
    </div>
  );
};

export default DateFilter;
