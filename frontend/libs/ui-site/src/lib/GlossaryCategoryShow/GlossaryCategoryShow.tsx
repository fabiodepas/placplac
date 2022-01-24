import React from 'react';
import styles from './GlossaryCategoryShow.module.css';
import { TextShow } from '../TextShow';
import { GlossaryCategory, GlossaryTerm } from '@algocount/shared/types';
import { GlossaryTermsList } from '../components/GlossaryTermsList';
interface GlossaryCategoryShowProps {
  glossaryCategory: GlossaryCategory;
  glossaryTerms: GlossaryTerm[];
  basePath: string;
}
export const GlossaryCategoryShow = (props: GlossaryCategoryShowProps) => {
  const { glossaryCategory, glossaryTerms, basePath } = props;
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <h2>{glossaryCategory.title}</h2>
        <p>{glossaryCategory.description}</p>
        <GlossaryTermsList glossaryTerms={glossaryTerms} />
      </div>
      <div className={styles.content}>
        {glossaryTerms.map((term) => (
          <div
            key={term.id}
            id={`glossary/${term.id}`}
            className={styles.glossary_term_item}
          >
            <div
              style={{ backgroundColor: term.color }}
              className={styles.title}
            >
              {term.title}
              <img className={styles.arrow} src={'/assets/arrowleftdown.png'} />
            </div>
            <div className={styles.description}>
              {term.image && (
                <img
                  className={styles.term_mage}
                  src={term.image}
                  width={'100%'}
                  height="auto"
                  style={{ maxWidth: '500px' }}
                />
              )}
              <TextShow text={term.description} />
            </div>
            <table>
              <tbody>
                {term.used_in && term.used_in.length > 0 && (
                  <tr>
                    <td>Used in:</td>
                    <td>
                      {term.used_in.map((exp) => (
                        <a key={exp.id}>{exp.title}</a>
                      ))}
                    </td>
                  </tr>
                )}
                {term.related && term.related.length > 0 && (
                  <tr>
                    <td>Related:</td>
                    <td>
                      {term.related.map((term: any) => (
                        <span
                          key={term.id}
                          className="mention"
                          style={{ backgroundColor: term.color }}
                        >
                          <a
                            href={`${basePath}glossary/${term.category}#glossary/${term.id}`}
                          >
                            <span>{term.title}</span>
                          </a>
                        </span>
                      ))}
                    </td>
                  </tr>
                )}
                {term.more_info_url && term.more_info_url.length > 0 && (
                  <tr>
                    <td>Other material:</td>
                    <td>
                      <ul>
                        {term.more_info_url.map((exp) => (
                          <li key={exp.url}>
                            <a
                              target={'_blank'}
                              href={exp.url}
                              rel="noreferrer"
                            >
                              {exp.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
