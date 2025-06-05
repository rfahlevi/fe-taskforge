"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type TCombobox = {
  value: string;
  label: string;
};

interface PropTypes {
  className?: string;
  dataLabel: string;
  values: TCombobox[];
}

export function Combobox(props: PropTypes) {
  const { className, dataLabel, values } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full text-muted-foreground font-normal justify-between",
            className,
            {
              "text-normal": value,
            }
          )}
        >
          {value
            ? values.find((data) => data.value === value)?.label
            : `Select ${dataLabel}...`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput
            placeholder={`Search ${dataLabel}...`}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No {dataLabel} found.</CommandEmpty>
            <CommandGroup>
              {values.map((data) => (
                <CommandItem
                  key={data.value}
                  value={data.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {data.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === data.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
