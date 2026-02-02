# Pre-Delivery Checklist

Use this checklist before deploying any changes to ensure UI/UX quality standards.

---

## ✅ Visual Quality

- [ ] No emojis used as icons (use SVG from Lucide/Heroicons instead)
- [ ] All icons from consistent icon set (currently using Lucide)
- [ ] Brand logos are correct and high quality
- [ ] Hover states don't cause layout shift (use opacity/color, not scale)
- [ ] Images have appropriate alt text
- [ ] Typography hierarchy is clear and consistent

---

## ✅ Interaction & Accessibility

- [ ] All clickable elements have `cursor-pointer`
- [ ] All interactive elements have visible focus states (`focus:ring-2 focus:ring-gold`)
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms for interactions, 500-800ms for page transitions)
- [ ] Focus states visible for keyboard navigation
- [ ] Skip link present and functional
- [ ] ARIA labels on all interactive elements
- [ ] Semantic HTML used throughout

---

## ✅ Responsive Design

- [ ] Tested at 375px (mobile)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1024px (desktop)
- [ ] Tested at 1440px (large desktop)
- [ ] No horizontal scroll on mobile
- [ ] Touch targets are at least 44x44px
- [ ] No content hidden behind fixed navbars

---

## ✅ Accessibility (WCAG 2.1 Level AA)

- [ ] Text contrast ratio is 4.5:1 minimum (use WebAIM contrast checker)
- [ ] All images have meaningful alt text
- [ ] Form inputs have associated labels
- [ ] Color is not the only indicator of state
- [ ] `prefers-reduced-motion` is respected
- [ ] Keyboard navigation works for all features
- [ ] Screen reader tested (VoiceOver on Mac, NVDA on Windows)

---

## ✅ Performance

- [ ] Images are optimized (WebP format preferred)
- [ ] No unnecessary re-renders in React components
- [ ] Lazy loading for images below the fold
- [ ] Font loading strategy in place (`font-display: swap`)
- [ ] No console errors or warnings

---

## ✅ SEO

- [ ] Page title is descriptive and unique
- [ ] Meta description is compelling (150-160 characters)
- [ ] Open Graph tags are present and correct
- [ ] Twitter Card tags are present
- [ ] Heading hierarchy is logical (single h1, proper h2-h6)
- [ ] URLs are descriptive and clean

---

## ✅ Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## ✅ Code Quality

- [ ] No TypeScript errors
- [ ] No ESLint warnings (except Tailwind CSS warnings)
- [ ] Components are properly typed
- [ ] No unused imports
- [ ] Consistent code formatting

---

## ✅ Design System Compliance

- [ ] Colors use CSS variables from design system
- [ ] Typography uses defined font families (Cormorant Garamond / Outfit)
- [ ] Spacing uses consistent scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- [ ] Components follow established patterns
- [ ] Animations respect brand timing (200-800ms)

---

## 🎨 Luxury Brand Guidelines

- [ ] Maintains premium, sophisticated aesthetic
- [ ] Generous white space (luxury spacing)
- [ ] High-quality imagery
- [ ] Elegant transitions and animations
- [ ] Subtle, refined interactions
- [ ] Professional tone throughout

---

## 📱 Mobile-Specific Checks

- [ ] Touch interactions work (not hover-only)
- [ ] Text is readable without zooming
- [ ] Buttons are easy to tap
- [ ] Forms are easy to fill on mobile
- [ ] Navigation is mobile-friendly
- [ ] No horizontal scrolling

---

## 🔍 Final Review

- [ ] Run Lighthouse audit (target: 90+ accessibility score)
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader
- [ ] Test on slow 3G connection
- [ ] Review in dark mode (if applicable)
- [ ] Cross-browser testing complete

---

## 📋 Deployment Checklist

- [ ] All tests passing
- [ ] No console errors in production build
- [ ] Environment variables configured
- [ ] Analytics tracking in place
- [ ] Error monitoring configured
- [ ] Backup of previous version available

---

## 🚨 Critical Reminders

**NEVER:**
- Remove focus outlines without replacement
- Use hover-only interactions for critical features
- Ignore accessibility warnings
- Deploy with console errors
- Use emojis as functional icons
- Create layout-shifting animations

**ALWAYS:**
- Test keyboard navigation
- Provide alt text for images
- Use semantic HTML
- Respect user motion preferences
- Maintain 4.5:1 contrast ratio
- Include ARIA labels where needed

---

## 📚 Resources

- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Lighthouse:** Built into Chrome DevTools
- **axe DevTools:** Browser extension for accessibility testing
- **Design System:** `design-system/artisan-canvas/MASTER.md`
- **UI/UX Skill:** `.agent/skills/ui-ux-pro-max/SKILL.md`

---

*Last updated: 2026-02-02*  
*Based on UI/UX Pro Max skill and WCAG 2.1 Level AA standards*
