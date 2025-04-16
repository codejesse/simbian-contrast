# 💡 Simbian Security Contrast – Animated Landing Experience

This submission presents a **simple and striking contrast** between traditional, alert-heavy security operations (**Without Simbian**) and streamlined, AI-driven threat management (**With Simbian**). It visually demonstrates how Simbian helps eliminate the clutter (by using the drop down clutred cards in the without simbian section) of missed or misclassified alerts—bringing clarity, automation, and speed to SOC operations.
The design is intentionally **minimal and goes straight to the point**—avoiding bloated assets or overcomplicated components to preserve performance and clarity. This UI also serves as a **boilerplate** for future enhancements and can be easily extended or customized based on evolving requirements.

## 🛠️ Tech & Animation Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (for component transitions and SVG animation)

## ✨ Impovements
- **Imroved UI & Icons**: Card UI could be significantly impored with UI kits and reducing dev time.
- **SVG Effects**: Custom vertical gradients + blur filters for glowing lines (with more time i would have achieved this)


---

## 📁 Project Structure

```bash
app/
├── page.tsx                 

components/
├── AlertCard.tsx          
├── AlertStream.tsx         
├── AnimatedStep.tsx       
├── SectionWithoutSimbian.tsx 
├── SectionWithSimbian.tsx  
├── PulseConnector.tsx      

lib/
├── alertData.ts      

