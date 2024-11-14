import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface DropdownProps {
  options: { value: string; label: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onChange }) => {
  return (
    <Menu as="div" className="relative inline-block text-left w-24 ">
      <div>
        <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-200 shadow-sm ring-1 ring-zinc-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-zinc-500">
          {options.find((option) => option.value === selectedOption)?.label || 'Select an option'}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-neutral-400" />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-zinc-900 focus:outline-none">
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.value}>
              {({ active }) => (
                <button
                  onClick={() => onChange(option.value)}
                  className={`${
                    active ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-300'
                  } block w-full text-left px-4 py-2 text-sm transition duration-150 ease-in-out`}
                >
                  {option.label}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
