import {
  BarChart3,
  Bus,
  CalendarCheck,
  Compass,
  Building2,
  Mountain,
  Landmark,
  Plane,
  Sparkles,
  Users,
  UserCog,
  Wallet,
  TrendingUp,
  Route,
  type LucideIcon,
} from 'lucide-react'

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export type Solution = {
  slug: string
  icon: LucideIcon
  title: string
  short: string
  description: string
  features: string[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'booking',
    icon: CalendarCheck,
    title: 'Booking Management',
    short: 'Enquiries to confirmations, payments and cancellations.',
    description:
      'Manage your complete booking lifecycle, from enquiries and quotations to confirmations, payments and cancellations.',
    features: [
      'Booking creation and management',
      'Reservation calendar',
      'Booking status tracking',
      'Customer and group bookings',
      'Booking modifications',
      'Cancellations and refunds',
      'Payment tracking',
      'Booking confirmation documents',
    ],
  },
  {
    slug: 'operations',
    icon: Route,
    title: 'Tour Operations',
    short: 'Plan, coordinate and monitor daily tour activities.',
    description:
      'Plan, coordinate and monitor your daily tour activities through one centralized operational workspace.',
    features: [
      'Tour scheduling',
      'Departure management',
      'Daily operations calendar',
      'Tour manifests',
      'Guide assignments',
      'Vehicle assignments',
      'Operational checklists',
      'Tour status monitoring',
      'Tour completion records',
    ],
  },
  {
    slug: 'crm',
    icon: Users,
    title: 'Customer Relationships',
    short: 'Every customer, enquiry and conversation organized.',
    description:
      'Build stronger customer relationships by keeping all customer information and interactions organized.',
    features: [
      'Customer database',
      'Customer profiles',
      'Contact information',
      'Booking history',
      'Enquiry management',
      'Follow-up reminders',
      'Communication history',
      'Customer segmentation',
      'Feedback and reviews',
    ],
  },
  {
    slug: 'resources',
    icon: Bus,
    title: 'Resource Management',
    short: 'Guides, drivers, vehicles and equipment — ready.',
    description:
      'Manage your business resources efficiently and ensure everything is ready before every tour.',
    features: [
      'Tour guide management',
      'Driver management',
      'Vehicle fleet management',
      'Equipment management',
      'Staff availability',
      'Resource allocation',
      'Resource scheduling',
      'Maintenance tracking',
      'Utilization reports',
    ],
  },
  {
    slug: 'sales',
    icon: TrendingUp,
    title: 'Sales Management',
    short: 'Convert more enquiries into confirmed bookings.',
    description: 'Organize your sales pipeline and convert more enquiries into confirmed bookings.',
    features: [
      'Lead management',
      'Sales pipeline',
      'Quotation management',
      'Sales team assignment',
      'Follow-up scheduling',
      'Conversion tracking',
      'Sales performance reports',
      'Customer acquisition tracking',
    ],
  },
  {
    slug: 'finance',
    icon: Wallet,
    title: 'Accounts & Finance',
    short: 'Payments, expenses, commissions and profitability.',
    description:
      'Maintain financial visibility across bookings, payments, expenses and business transactions.',
    features: [
      'Customer payment tracking',
      'Supplier payments',
      'Expense management',
      'Revenue tracking',
      'Refund management',
      'Guide and driver payments',
      'Commission tracking',
      'Invoice generation',
      'Profit and loss reports',
    ],
  },
  {
    slug: 'reports',
    icon: BarChart3,
    title: 'Reports & Analytics',
    short: 'Turn business data into actionable insight.',
    description:
      "Transform business data into actionable insights and monitor your company's performance.",
    features: [
      'Booking reports',
      'Revenue reports',
      'Tour performance',
      'Sales conversion reports',
      'Customer reports',
      'Resource utilization',
      'Expense reports',
      'Profitability analysis',
    ],
  },
  {
    slug: 'team',
    icon: UserCog,
    title: 'Team Management',
    short: 'Users, roles and permissions in one place.',
    description: 'Give every team member the right access with role-based permissions and user management.',
    features: ['User accounts', 'Role-based access', 'Staff assignments', 'Activity visibility'],
  },
]

export const INDUSTRIES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Compass,
    title: 'Tour Operators',
    description: 'Manage multiple tour packages, bookings, departures, customers and operational teams.',
  },
  {
    icon: Building2,
    title: 'Destination Management Companies',
    description:
      'Coordinate incoming travel arrangements, suppliers, guides, transportation and destination services.',
  },
  {
    icon: Mountain,
    title: 'Adventure & Activity Operators',
    description: 'Manage activity reservations, participant information, schedules, equipment and staff assignments.',
  },
  {
    icon: Landmark,
    title: 'Sightseeing & Excursion Companies',
    description: 'Organize daily departures, sightseeing routes, group reservations, vehicles and tour guides.',
  },
  {
    icon: Plane,
    title: 'Travel Agencies',
    description: 'Manage customer enquiries, quotations, reservations, customer information and sales activities.',
  },
  {
    icon: Sparkles,
    title: 'Experience Providers',
    description:
      'Coordinate experience schedules, availability, bookings, customer communication and resource requirements.',
  },
]
