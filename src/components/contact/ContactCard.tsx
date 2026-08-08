import { Mail, MapPin, Briefcase, Download } from "lucide-react";

import ContactItem from "./ContactItem";

import { contactInfo } from "@/data/contact";
import { personalInfo } from "@/data/personal";

import { Button } from "@/components/ui/button";

export default function ContactCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
      "
    >
      <div className="space-y-8">
        <ContactItem
          icon={<Mail size={20} />}
          title="Email"
          value={personalInfo.email}
        />

        <ContactItem
          icon={<MapPin size={20} />}
          title="Location"
          value={personalInfo.location}
        />

        <ContactItem
          icon={<Briefcase size={20} />}
          title="Availability"
          value={contactInfo.availability}
        />
      </div>

      <div className="mt-10">
        <a
          href={personalInfo.resume}
          download
        >
          <Button className="w-full">
            Download Resume

            <Download className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}