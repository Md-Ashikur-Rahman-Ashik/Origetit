"use client";
import React, { useEffect } from 'react';
import Datamap from 'datamaps';

const MapComponent = () => {
  useEffect(() => {
    // Map data
    const dataSet = {
      BRA: {
        active: {
          value: '5,101',
          percent: '42.2',
          isGrown: false,
        },
        new: {
          value: '444',
          percent: '41.2',
          isGrown: false,
        },
        fillKey: 'MAJOR',
        short: 'br',
      },
      CHN: {
        active: {
          value: '10,101',
          percent: '13.7',
          isGrown: true,
        },
        new: {
          value: '509',
          percent: '0.1',
          isGrown: false,
        },
        fillKey: 'MAJOR',
        short: 'cn',
      },
      DEU: {
        active: {
          value: '8,408',
          percent: '5.4',
          isGrown: false,
        },
        new: {
          value: '1001',
          percent: '5.1',
          isGrown: true,
        },
        fillKey: 'MAJOR',
        short: 'de',
      },
      GBR: {
        active: {
          value: '4,889',
          percent: '9.1',
          isGrown: false,
        },
        new: {
          value: '2,001',
          percent: '3.2',
          isGrown: true,
        },
        fillKey: 'MAJOR',
        short: 'gb',
      },
      IND: {
        active: {
          value: '1,408',
          percent: '19.2',
          isGrown: true,
        },
        new: {
          value: '392',
          percent: '11.1',
          isGrown: true,
        },
        fillKey: 'MAJOR',
        short: 'in',
      },
      USA: {
        active: {
          value: '392',
          percent: '0.9',
          isGrown: true,
        },
        new: {
          value: '1,408',
          percent: '2.2',
          isGrown: true,
        },
        fillKey: 'MAJOR',
        short: 'us',
        customName: 'United States',
      },
      ARG: { // Adding Argentina
        active: {
          value: '1,200',
          percent: '10.5',
          isGrown: true,
        },
        new: {
          value: '500',
          percent: '8.1',
          isGrown: true,
        },
        fillKey: 'MAJOR',
        short: 'ar',
        customName: 'Argentina',
      },
      CHL: { // Adding Chile
        active: {
          value: '800',
          percent: '15.3',
          isGrown: false,
        },
        new: {
          value: '300',
          percent: '3.4',
          isGrown: false,
        },
        fillKey: 'MAJOR',
        short: 'cl',
        customName: 'Chile',
      },
    };

    const dataMap = new Datamap({
      element: document.getElementById('hs-users-datamap'),
      projection: 'mercator',
      responsive: true,
      fills: {
        defaultFill: '#d1d5db',
        MAJOR: '#9ca3af',
      },
      data: dataSet,
      geographyConfig: {
        borderColor: 'rgba(0, 0, 0, .09)',
        highlightFillColor: '#3b82f6',
        highlightBorderColor: '#3b82f6',
        popupTemplate: (geo, data) => {
          if (!data) return '<div>No data available</div>'; // Return a fallback if no data is present

          // Access properties safely
          const customName = data.customName || geo.properties.name || 'Unknown';
          const activeValue = data.active ? data.active.value : 'N/A';
          const activePercent = data.active ? data.active.percent : 'N/A';
          const newValue = data.new ? data.new.value : 'N/A';
          const newPercent = data.new ? data.new.percent : 'N/A';
          const activeGrowth = data.active ? data.active.isGrown : false;
          const newGrowth = data.new ? data.new.isGrown : false;

          const growUp = `
            <svg class="size-4 text-teal-500 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          `;

          const growDown = `
            <svg class="size-4 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
              <polyline points="16 17 22 17 22 11" />
            </svg>
          `;

          return `
            <div class="bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] w-[150px] p-3">
              <div class="flex mb-1">
                <div class="me-2">
                  <div class="size-4 rounded-full bg-no-repeat bg-center bg-cover" style="background-image: url('../node_modules/svg-country-flags/svg/${data.short}.svg');"></div>
                </div>
                <span class="text-sm font-medium">${customName}</span>
              </div>
              <div class="flex items-center">
                <span class="text-sm text-gray-500 dark:text-neutral-500">Active:</span>
                <span class="text-sm font-medium ${activeGrowth ? 'text-teal-500' : 'text-red-500'}">${activeValue}</span>
                <span class="text-sm ${activeGrowth ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'}">${activePercent}</span>
                ${activeGrowth ? growUp : growDown}
              </div>
              <div class="flex items-center">
                <span class="text-sm text-gray-500 dark:text-neutral-500">New:</span>
                <span class="text-sm font-medium ${newGrowth ? 'text-teal-500' : 'text-red-500'}">${newValue}</span>
                <span class="text-sm ${newGrowth ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'}">${newPercent}</span>
                ${newGrowth ? growUp : growDown}
              </div>
            </div>
          `;
        }
      },
    });

    const updateMapTheme = (mode) => {
      dataMap.options.fills =
        mode === 'dark'
          ? {
            defaultFill: '#374151',
            MAJOR: '#6b7280',
          }
          : {
            defaultFill: '#d1d5db',
            MAJOR: '#9ca3af',
          };

      dataMap.updateChoropleth(dataSet, { reset: true });
    };

    dataMap.addPlugin('update', (_, mode) => {
      updateMapTheme(mode);
    });

    const storedTheme = localStorage.getItem('hs_theme');
    dataMap.update(storedTheme);

    const handleAppearanceChange = (evt) => {
      dataMap.update(evt.detail);
    };

    window.addEventListener('on-hs-appearance-change', handleAppearanceChange);

    window.addEventListener('resize', () => {
      dataMap.resize();
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('on-hs-appearance-change', handleAppearanceChange);
      window.removeEventListener('resize', () => {
        dataMap.resize();
      });
    };
  }, []);

  return (
    <div className="border-black p-2 border rounded-xl">
      <h3 className="text-center text-xl font-bold">Reputation map</h3>
      <div id="hs-users-datamap" className="rounded-xl w-full" style={{ height: '500px'}} />
    </div>
  );
};

export default MapComponent;
