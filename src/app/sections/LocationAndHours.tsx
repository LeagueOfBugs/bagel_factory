import { content } from "@/config/content";
import {
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

function LocationAndHours() {
  return (
    <section className="py-16" id="location">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-medium">{content.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-medium">{content.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">
                    {content.contact.hours1}
                  </p>
                  <p className="text-muted-foreground">
                    {content.contact.hours2}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 dark:bg-orange-950 dark:hover:bg-orange-900"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 dark:bg-orange-950 dark:hover:bg-orange-900"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 dark:bg-orange-950 dark:hover:bg-orange-900"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden bg-muted">
            {/* Map placeholder - in a real implementation, you would integrate Google Maps or another map service */}
            <div className="w-full h-full flex items-center justify-center bg-orange-100 dark:bg-orange-950">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  123 Breakfast Lane, Morningville
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationAndHours;
