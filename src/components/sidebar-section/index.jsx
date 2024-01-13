import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function SidebarSection({ title, children, more }) {
  return (
    <section className="bg-[color:var(--background-secondary)] mb-4  rounded-2xl border-[color:var(--background-secondary)]">
      <h5 className="h-12 flex items-center leading-6 py-3 px-4 text-xl font-extrabold  ">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="h-[52px] flex items-center rounded-b-2xl justify-start px-4 text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03] "
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,

  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

SidebarSection.defaultProps = {
  more: false,
};
