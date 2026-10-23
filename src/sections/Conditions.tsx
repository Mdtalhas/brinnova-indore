import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  SpineIcon, KneeIcon, BrainIcon, SurgeryIcon, BoneIcon, BalanceIcon, ElderlyIcon,
} from '../components/Icons';

const conditionIconMap: Record<string, React.FC<{ size?: number }>> = {
  spine: SpineIcon,
  knee: KneeIcon,
  brain: BrainIcon,
  surgery: SurgeryIcon,
  bone: BoneIcon,
  balance: BalanceIcon,
  elderly: ElderlyIcon,
};

const Conditions: React.FC = () => {
  return (
    <section className="section section--light" aria-label="Conditions and rehabilitation needs we support">
      <div className="container">
        <div className="section-header">
          <h2>Conditions &amp; Rehabilitation Needs We Support</h2>
        </div>

        <div className="conditions-grid">
          {siteConfig.conditions.map((condition) => {
            const IconComponent = conditionIconMap[condition.icon] || SpineIcon;
            return (
              <div className="condition-item" key={condition.label}>
                <div className="condition-item__icon">
                  <IconComponent size={20} />
                </div>
                <span className="condition-item__label">{condition.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
